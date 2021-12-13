let users = ["Jean", "Robert", "Samantha"];

export function list_user(req, res, next) {
  res.status(200).json(users);
}

export function add_user(req, res, next) {
  if (req.body.name && typeof req.body.name === "string") {
    users.push(req.body.name);
    res.status(201).json(`${req.body.name} added`);
  } else {
    res.status(400).json({ message: "Missing name" });
  }
}

export function detail_user(req, res, next) {
  const id = req.params.id;
  res.status(200).json(users[id]);
}
