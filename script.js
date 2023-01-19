const form = document.querySelector("#forms-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-03", "01-11", "01-14"],
  water: ["01-03", "01-04", "01-10", "01-12", "01-14"],
  gym: ["01-07", "01-09", "01-10", "01-13", "01-14"],
  sleep: ["01-06", "01-09", "01-10", "01-11"],
  walker: ["01-04", "01-07", "01-10", "01-11", "01-12", "01-14"],
  diet: ["01-07", "01-09", "01-13", "01-14"],
};

nlwSetup.setData(data);

nlwSetup.load();
