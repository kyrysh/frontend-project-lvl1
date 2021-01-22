#!/usr/bin/env node
import game from './src/index.js';

import { calcRule, getCalcQuestion, getCalcRightAnswer } from './games/brainCalcGame.js';

game(calcRule, getCalcQuestion, getCalcRightAnswer);
