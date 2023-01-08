async function callerFirst() {
  console.log("callerFirst before");
  const data = Promise.resolve("promise1").then((d) => console.log(d));
  console.log("callerFirst after");

  return data;
}

const callerSecond = async () => {
  console.log("callerSecond before");
  const data = new Promise((r) => r("promise2")).then((d) => console.log(d));
  console.log("callerSecond after");

  return data;
};

async function caller() {
  const a = await callerFirst();
  const b = callerSecond();
  // console.log(a);
  // console.log(b);
}

caller();
console.log("a");
