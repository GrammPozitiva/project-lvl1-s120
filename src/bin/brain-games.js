#!/usr/bin/env node

'use strict';

import { askName, showGreet } from '../index';

console.log('Welcome to the Brain Games!');

const name = askName();

showGreet(name);
