#!/usr/bin/env node
import game from './src/index.js';

import { GCDrule, getGCDquestion, getGCDrightAnswer } from './games/brainGCDGame.js';

game(GCDrule, getGCDquestion, getGCDrightAnswer);
