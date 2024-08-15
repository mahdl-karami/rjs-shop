function findIndex(arr , object) {
  console.log(arr , object)
  const index = arr?.findIndex((item) => item.id == object.id);
  return index;
}

export default findIndex