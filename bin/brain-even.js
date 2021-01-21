#!/usr/bin/env node
import game from './src/index.js';

import { brainEvenGameRule, getBrainEvenGameQuestion, getBrainEvenGameRightAnswer } from './games/brainEvenGame.js';

game(brainEvenGameRule, getBrainEvenGameQuestion, getBrainEvenGameRightAnswer);
