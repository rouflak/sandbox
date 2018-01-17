import {
  project as projectModel,
  client as clientModel
} from '../models';
import router from '../router';
import { commonAttributes } from '../tools/data-formatter';
import { loadEntityById, loadEntities } from '../services/model-service';

const defaultLimit = 20;
const defaultPage = 0;

const prepareProjectResponse = (project) => commonAttributes(project, {
  name: project.name,
  description: project.description,
  clientId: project.clientId
});

router.get('/projects', async (req, res, next) => {
  try {
    const { query: {
      search,
      limit,
      page
    } } = req;

    const _limit = parseInt(limit || defaultLimit);
    const _offset = (page || defaultPage) * _limit;

    const projects = await loadEntities('project', {
      where: JSON.parse(search),
      limit: _limit,
      offset: _offset
    });

    res.status(200).json(projects);
  }
  catch(e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.post('/projects', async (req, res, next) => {
  try {
    const { body: {
      name,
      description
    } } = req

    const project = await projectModel.create({
      name,
      description
    });

    res.status(201).json(project);
  }
  catch(e) {
    res.status(500).send(e);
  }
});

router.get('/projects/:id', async(req, res, next) => {
  try {
    const {
      params: { id }
    } = req;

    const project = await projectModel.findById(id);

    if (!project) {
      return res.status(400).send(`Could not find project with id ${id}`);
    }

    res.status(200).send(project);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.put('/projects/:id', async (req, res, next) => {
  try {
    const {
      body: {
        name,
        description,
        clientId
      },
      params: {
        id
      }
    } = req;

    let project = await projectModel.findById(id);
    if (!project) {
      return res.status(400).send(`Could not find project with id ${id}`);
    }

    const client = await clientModel.findById(clientId);
    if (!client) {
      return res.status(400).send(`Could not find client with id ${clientId}`);
    }

    await project.update({
      name,
      description,
      clientId: clientId
    });

    res.status(200).json(prepareProjectResponse(project));
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.delete('/projects/:id', async (req, res, next) => {
  try {
    const {
      params: {
        id
      }
    } = req;

    const project = await projectModel.findById(id);

    if (!project) {
      return res.status(400).send(`Could not find project with id ${id}`);
    }

    await project.destroy();

    res.status(204).send();
  } catch(e) {
    res.status(500).send(e.message);
  }
})

export default router;
