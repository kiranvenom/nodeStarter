import { Router } from 'express';

const router = Router();

// Define user-specific routes
router.get('/', (req, res) => {
	res.status(200).json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({ message: `Get user with ID: ${id}` });
});

router.post('/', (req, res) => {
	const user = req.body;
	res.status(201).json({ message: 'User created', user });
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const updatedUser = req.body;
	res.status(200).json({
		message: `User with ID: ${id} updated`,
		updatedUser,
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({ message: `User with ID: ${id} deleted` });
});

export default router;
