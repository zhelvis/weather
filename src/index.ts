#!/usr/bin/env node

import { cli } from "./cli";

const args = process.argv.slice(2);

cli(args);
