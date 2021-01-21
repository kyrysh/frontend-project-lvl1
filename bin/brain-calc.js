#!/usr/bin/env node
import game from './src/index.js';

import { brainCalcGameRule, getBrainCalcGameQuestion, getBrainCalcGameRightAnswer } from './games/brainCalcGame.js';

game(brainCalcGameRule, getBrainCalcGameQuestion, getBrainCalcGameRightAnswer);
