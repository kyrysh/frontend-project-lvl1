#!/usr/bin/env node
import game from './src/index.js';

import { calcRule, getCaclAttributes } from './games/brainCalcGame.js';

game(calcRule, getCaclAttributes);
