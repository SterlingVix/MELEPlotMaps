import Conds from './LE1ConditionalsLinkable';
import PlotBools from './LE1Bools';
import PlotInts from './LE1Ints';
import React from 'react';
import _ from 'lodash';

const groups = {
  bools: 2,
  conds: 1,
  floats: 4,
  ints: 3,
  trans: 5,
};

const getNumOrStr = (maybeInt) => {
  const parsed = _.parseInt(maybeInt);

  return _.isNaN(parsed)
    ? maybeInt
    : parsed;
};

const nodesBoolsMap = _.map(PlotBools, ({ plotEl, descr }, boolsId) => ({
  descr,
  id: getNumOrStr(boolsId),
  group: groups.bools,
}));

const nodesIntsMap = _.map(PlotInts, ({ plotEl, descr }, intsId) => ({
  descr,
  id: getNumOrStr(intsId),
  group: groups.ints,
}));
console.log("-> nodesIntsMap", nodesIntsMap);

/**
 * {
 *   bools: [],
 *   func,
 *   id: cndId,
 *   ints: [],
 *   namedBools: [],
 *   namedInts: [],
 * }
 */
const nodesCondsMap = _.map(Conds, (node, funcId) => {
  return {
    ...node,
    id: getNumOrStr(node.id),
    group: groups.conds,
  };
});

export const nodes = [
  ...nodesBoolsMap,
  ...nodesIntsMap,
  ...nodesCondsMap,
];

export const links = _.flatMap(Conds, (node) => {
  /*
     bools: []
     descr: gv => gv.GetInt(13) === 120101
     id: "F817"
     ints: [13]
     namedBools: []
   */
  const {
    bools = [],
    ints = [],
    namedBools = [],
    namedInts = [],
  } = node;

  const links = _.uniq([
    ...bools,
    ...ints,
    ...namedBools,
    ...namedInts,
  ]);

  return _.map(links, (boolOrInt) => ({
    source: node.id,
    target: boolOrInt,
    value: 1,// TODO: is this force weight?
  }));
});