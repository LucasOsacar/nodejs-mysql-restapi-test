import { Router } from 'express';
import {getEmployees} from '../controllers/employees.controller.js';
import {createEmployee} from '../controllers/employees.controller.js';
import { updateEmployee } from '../controllers/employees.controller.js';
import { deleteEmployee } from '../controllers/employees.controller.js';
import { getEmployee } from '../controllers/employees.controller.js';
// O todo en una linea
//import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

export default router;