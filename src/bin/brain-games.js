#!/usr/bin/env node
import { askName, showGreet } from '../index';

console.log('Welcome to the Brain Games!');

const name = askName();

showGreet(name);
