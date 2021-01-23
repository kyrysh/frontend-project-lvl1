#!/usr/bin/env node
import game from './src/index.js';

import { progressionRule, getProgressionAttributes } from './games/brainProgressionGame.js';

game(progressionRule, getProgressionAttributes);
