import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
const  guestList = "/../../public/static-images/events-images/event-page/guest-icon.png";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const events = [{
  id: 1,
  name: "event Name", 
  when: `When: 01/01/2025`,
  where: `Where: Location A`,
  image: "temp"
  },
  {
    id: 2,
    name: "event Name", 
    when: `When: 02/01/2025`,
    where: `Where: Location B`,
    image: "../../../public/static-images/members-images/event1.png"
  },
  {
    id: 3,
    name: "event Name", 
    when: `When: 03/01/2025`,
    where: `Where: Location C`,
    image: "../../../public/static-images/members-images/event1.png"
  },
];

const performers = [
  {
    id: 1,
    name: "Performer 1",
  },
  {
    id: 2,
    name: "Performer 2",
  },
  {
    id: 3,
    name: "Performer 3",
  },
  {
    id: 4,
    name: "Performer 4",
  },
];

const gustIconRepeat = 10;

const guestListArray = Array.from({ length: gustIconRepeat }, (_, index) => ({
  id: index + 1, // Assign a unique ID for each guest icon
  name: `Guest ${index + 1}`, // Assign a name for each guest icon
  image: guestList, // Use the same guest icon image for all
  })).map((guest) => ({
    ...guest,
    image: guestList, // Use the same guest icon image for all    
  })); // Create an array of guest icons with the same image



app.get("/", (req: Request, res: Response) => {
  res.send("Connected to Express backend!");
});

app.get("/events/:id", (req: Request, res: Response) => {
  const eventId = req.params.id;
  console.log({eventId})
  const event = events.find((event) => event.id === parseInt(eventId));
  if (event) {
    res.status(200).json(event);
  }else {
    res.status(404).json({ message: "Event not found" });
  }
});

app.get("/performers", (req: Request, res: Response) => {
  console.log({performers})
  res.status(200).json(performers);
});

app.get("/guest-list", (req: Request, res: Response) => {
  // Send the guest list array as a response
  res.status(200).json(guestListArray);
});

//@ts-expect-error -next-line
app.use("*", (req: Request, res: Response) => {
  if(!guestListArray) {
    return res.status(500).json({ message: "Guest list not available" });
  }
  console.log({guestListArray})
  return res.status(404).json({message: "Route not found" });
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
  next();
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});