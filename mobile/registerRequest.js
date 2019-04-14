const SERVICE_URL = "https://414ece62.ngrok.io";

const getReferals = async () => {
  const res = await fetch(`${SERVICE_URL}/ughegir`);
  const resToJson = await res.json();
  return resToJson;
};
const getHistory = async () => {
  const res = await fetch(`${SERVICE_URL}/history`);
  const resToJson = await res.json();
  return resToJson;
};

export default getReferals;
export { getHistory };
