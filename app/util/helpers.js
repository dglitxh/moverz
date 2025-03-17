export const httpReq = async (type, url, data) => {
  // an empty string is used for requests without data
  type = type.toUpperCase();
  let config = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  let res;
  try {
    if (type === "GET" || type === "DELETE") {
      const req = await fetch(url, config);
      res = await req.text();
      if (req.status <= 201) {
        console.log(req.status);
      } else {
        throw new Error();
      }
    } else if (type === "POST" || type === "PUT") {
      config["body"] = data;
      const req = await fetch(url, config);
      res = await req.text();
      if (req.status <= 201) {
        console.log(res.status, "success")
      } else {
        console.log(res, "resss helper", req.status);
        throw new Error();
      }
    }
    return 200;
  } catch (e) {
    console.log(e, "helper err");
    return 400;
  }
};
