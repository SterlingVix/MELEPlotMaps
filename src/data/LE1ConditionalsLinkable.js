// import BioWorld from './LE1BioWorld';
import _ from 'lodash';
import * as LE1ConditionalsPlotManager from './LE1ConditionalsPlotManager';
import * as LE1ConditionalsPlotManagerAuto_DLC_UNC from './LE1ConditionalsPlotManagerAuto_DLC_UNC';

const conds = {
  ...LE1ConditionalsPlotManager,
  ...LE1ConditionalsPlotManagerAuto_DLC_UNC,
};

const Conds = _.map(conds, (func, cndId) => {
  const node = {
    bools: [],
    descr: func,
    id: cndId,
    ints: [],
    namedBools: [],
    namedInts: [],
  };

  const gv = {
    GetBool: (boolArg) => node.bools.push(boolArg),
    GetInt: (intArg) => node.ints.push(intArg),
  };

  const BioWorld = {
    GetLocalBoolVariable: (arg, propName) => {
      node.namedBools.push(propName);
    },
    GetLocalIntegerVariable: (arg, propName) => {
      node.namedInts.push(propName);
    },
  };

  func(gv, 0, BioWorld);
  return node;
});

export default Conds;
