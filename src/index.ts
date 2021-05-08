#!/usr/bin/env node

import { readInput } from "./cli";

const args = process.argv.slice(2);

readInput(args);
