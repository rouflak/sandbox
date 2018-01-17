import clientModel from '../models/client';
import router from '../router';

const defaultLimit = 20;
const defaultPage = 0;

router.get('/clients', async (req, res, next) => {
  try {
    const { query: {
      limit,
      page
    } } = req;

    const _limit = parseInt(limit || defaultLimit);
    const _offset = (page || defaultPage) * _limit;

    const clients = await clientModel.findAll({
      limit: _limit,
      offset: _offset
    });

    res.status(200).json(clients);
  }
  catch(e) {
    res.status(500).send(e.message);
  }
});

router.post('/clients', async (req, res, next) => {
  try {
    const { body: {
      name,
      description
    } } = req

    const client = await clientModel.create({
      name,
      description
    });

    res.status(201).json(client);
  }
  catch(e) {
    res.status(500).send(e);
  }
});

router.get('/clients/:id', async(req, res, next) => {
  try {
    const {
      params: { id }
    } = req;

    const client = await clientModel.findById(id);

    if (!client) {
      return res.status(400).send(`Could not find client with id ${id}`);
    }

    res.status(200).send(client);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.put('/clients/:id', async (req, res, next) => {
  try {
    const {
      body: {
        name,
        description
      },
      params: {
        id
      }
    } = req;

    const client = await clientModel.findById(id);

    if (!client) {
      return res.status(400).send(`Could not find client with id ${id}`);
    }

    client = await client.update({
      name,
      description
    });

    res.status(200).json(client);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

router.delete('/clients/:id', async (req, res, next) => {
  try {
    const {
      params: {
        id
      }
    } = req;

    const client = await clientModel.findById(id);

    if (!client) {
      return res.status(400).send(`Could not find client with id ${id}`);
    }

    await client.destroy();

    res.status(204).send();
  } catch(e) {
    res.status(500).send(e.message);
  }
})

export default router;
