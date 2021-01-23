#!/usr/bin/env node
import game from './src/index.js';

import { GCDrule, getGCDattributes } from './games/brainGCDGame.js';

game(GCDrule, getGCDattributes);
