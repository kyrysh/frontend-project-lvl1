#!/usr/bin/env node
import game from './src/index.js';

import { evenRule, getEvenQuestion, getEvenRightAnswer } from './games/brainEvenGame.js';

game(evenRule, getEvenQuestion, getEvenRightAnswer);
