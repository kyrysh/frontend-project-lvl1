#!/usr/bin/env node
import game from './src/index.js';

import { evenRule, getEvenAttributes } from './games/brainEvenGame.js';

game(evenRule, getEvenAttributes);
