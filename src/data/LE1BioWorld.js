import LE1Bools from './LE1Bools';

const LE1BioWorld = {
  GetGlobalVariables: () => ({
    GetBool: (bool) => {
      console.log("-> bool", bool);
      return bool;
    },
    GetFloat: (float) => {
      console.log("-> float", float);
      return float;
    },
    GetInt: (int) => {
      console.log("-> int", int);
      return int;
    },
  }),
  GetLocalBoolVariable: (bool) => {
    console.log("-> bool", bool);
  },
  GetLocalIntegerVariable: (int) => {
    console.log("-> int", int);
  },
  GetLocalFloatVariable: (int) => {
    console.log("-> int", int);
  },
};

export default LE1BioWorld;
