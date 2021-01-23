#!/usr/bin/env node
import game from './src/index.js';

import { primeRule, getPrimeAttributes } from './games/brainPrimeGame.js';

game(primeRule, getPrimeAttributes);
