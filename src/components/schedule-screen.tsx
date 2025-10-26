import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const daysOfWeek = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialEvents = [
  {
    id: 1,
    title: "Math Lecture",
    date: 21,
    month: 9,
    time: "9:00 AM",
    color: "#BAE6FD",
    duration: 2,
  },
  {
    id: 2,
    title: "Study Session",
    date: 21,
    month: 9,
    time: "2:00 PM",
    color: "#A78BFA",
    duration: 1,
  },
  {
    id: 3,
    title: "Group Project",
    date: 22,
    month: 9,
    time: "3:00 PM",
    color: "#FFC2D4",
    duration: 2,
  },
  {
    id: 4,
    title: "Rest Time",
    date: 21,
    month: 9,
    time: "7:00 PM",
    color: "#BBF7D0",
    duration: 1,
  },
  {
    id: 5,
    title: "Chemistry Lab",
    date: 23,
    month: 9,
    time: "10:00 AM",
    color: "#FED7AA",
    duration: 3,
  },
];

const eventColors = [
  { name: "Blue", value: "#BAE6FD" },
  { name: "Purple", value: "#A78BFA" },
  { name: "Pink", value: "#FFC2D4" },
  { name: "Mint", value: "#BBF7D0" },
  { name: "Peach", value: "#FED7AA" },
];

export function ScheduleScreen() {
  const [currentDate] = useState(new Date(2025, 9, 21)); // October 21, 2025
  const [view, setView] = useState<"week" | "day">("week");
  const [events, setEvents] = useState(initialEvents);
  const [isCreateDialogOpen, setIsCreateDialogOpen] =
    useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState<
    number | null
  >(null);

  // Form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "",
    duration: "1",
    color: "#A78BFA",
  });

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const todayEvents = events.filter(
    (e) => e.date === 21 && e.month === 9,
  );

  const getEventsForDay = (day: number) => {
    return events.filter(
      (e) => e.date === day && e.month === month,
    );
  };

  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.time || !selectedDate)
      return;

    const event = {
      id: events.length + 1,
      title: newEvent.title,
      date: selectedDate,
      month: month,
      time: newEvent.time,
      color: newEvent.color,
      duration: parseInt(newEvent.duration),
    };

    setEvents([...events, event]);
    setIsCreateDialogOpen(false);
    setNewEvent({
      title: "",
      time: "",
      duration: "1",
      color: "#A78BFA",
    });
    setSelectedDate(null);
  };

  const openCreateDialog = (day: number | null = 21) => {
    setSelectedDate(day);
    setIsCreateDialogOpen(true);
  };

  const openViewDialog = (day: number) => {
    setSelectedDate(day);
    setIsViewDialogOpen(true);
  };

  const switchToCreateFromView = () => {
    setIsViewDialogOpen(false);
    setIsCreateDialogOpen(true);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#FAF8FF] to-[#E9F5FF] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#A78BFA]/10 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-[#4A4458]">
              {months[month]} {year}
            </h2>
            <p className="text-[#8B7FA3]">
              Today is Tuesday, Oct 21
            </p>
          </div>
          <Button
            size="icon"
            onClick={() => openCreateDialog()}
            className="rounded-full bg-[#A78BFA] hover:bg-[#9270F0]"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setView("week")}
            className={`px-4 py-2 rounded-full transition-all ${
              view === "week"
                ? "bg-[#A78BFA] text-white"
                : "bg-white text-[#4A4458] border border-[#A78BFA]/20"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView("day")}
            className={`px-4 py-2 rounded-full transition-all ${
              view === "day"
                ? "bg-[#A78BFA] text-white"
                : "bg-white text-[#4A4458] border border-[#A78BFA]/20"
            }`}
          >
            Day
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {view === "week" && (
          <div className="bg-white rounded-3xl shadow-sm p-4 mb-4">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center">
                  <p className="text-[#8B7FA3]">{day}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, idx) => {
                const dayEvents = day
                  ? getEventsForDay(day)
                  : [];
                return (
                  <div
                    key={idx}
                    onClick={() => day && openViewDialog(day)}
                    className={`aspect-square flex flex-col items-center justify-start p-1 rounded-2xl transition-all ${
                      day === 21
                        ? "bg-[#A78BFA] text-white"
                        : day
                          ? "hover:bg-[#F3E8FF] text-[#4A4458] cursor-pointer"
                          : ""
                    }`}
                  >
                    {day && (
                      <>
                        <p className="mb-1">{day}</p>
                        <div className="flex gap-0.5 flex-wrap justify-center">
                          {dayEvents
                            .slice(0, 3)
                            .map((event) => (
                              <div
                                key={event.id}
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  backgroundColor:
                                    day === 21
                                      ? "white"
                                      : event.color,
                                }}
                                title={event.title}
                              ></div>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Today's Events */}
        <div>
          <h3 className="mb-3 text-[#4A4458]">
            Today's Schedule
          </h3>
          <div className="space-y-3">
            {todayEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-4 shadow-sm border-l-4 hover:shadow-md transition-shadow"
                style={{ borderLeftColor: event.color }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[#4A4458]">
                      {event.title}
                    </h4>
                    <p className="text-[#8B7FA3]">
                      {event.time} • {event.duration}h
                    </p>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: event.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jarvis Suggestion */}
        <div className="mt-4 bg-gradient-to-r from-[#E9D5FF] to-[#FFC2D4]/30 rounded-2xl p-4 border border-[#A78BFA]/20">
          <p className="text-[#4A4458]">
            You have a free hour at 4 PM — want to add a quick
            study session?
          </p>
        </div>
      </div>

      {/* View Day Schedule Dialog */}
      <Dialog
        open={isViewDialogOpen}
        onOpenChange={setIsViewDialogOpen}
      >
        <DialogContent className="bg-white border-[#A78BFA]/20 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-[#4A4458]">
              {selectedDate &&
                `${months[month]} ${selectedDate}, ${year}`}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {selectedDate &&
            getEventsForDay(selectedDate).length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {getEventsForDay(selectedDate).map((event) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-r from-[#FAF8FF] to-white rounded-2xl p-4 border-l-4"
                    style={{ borderLeftColor: event.color }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-[#4A4458]">
                          {event.title}
                        </h4>
                        <p className="text-[#8B7FA3]">
                          {event.time} • {event.duration}h
                        </p>
                      </div>
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: event.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-[#8B7FA3]">
                  No events scheduled for this day
                </p>
              </div>
            )}

            {/* Add Event Button */}
            <Button
              onClick={switchToCreateFromView}
              className="w-full rounded-full bg-[#A78BFA] hover:bg-[#9270F0]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Event Dialog */}
      <Dialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      >
        <DialogContent className="bg-white border-[#A78BFA]/20 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-[#4A4458]">
              Create New Event
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Date Display */}
            <div>
              <Label className="text-[#4A4458]">Date</Label>
              <div className="mt-1 px-4 py-2 bg-[#F3E8FF] rounded-2xl">
                <p className="text-[#4A4458]">
                  {selectedDate &&
                    `${months[month]} ${selectedDate}, ${year}`}
                </p>
              </div>
            </div>

            {/* Event Title */}
            <div>
              <Label htmlFor="title" className="text-[#4A4458]">
                Event Title
              </Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    title: e.target.value,
                  })
                }
                placeholder="e.g., Math Lecture"
                className="mt-1 rounded-2xl border-[#A78BFA]/20 focus:border-[#A78BFA]"
              />
            </div>

            {/* Time */}
            <div>
              <Label htmlFor="time" className="text-[#4A4458]">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    time: e.target.value,
                  })
                }
                className="mt-1 rounded-2xl border-[#A78BFA]/20 focus:border-[#A78BFA]"
              />
            </div>

            {/* Duration */}
            <div>
              <Label
                htmlFor="duration"
                className="text-[#4A4458]"
              >
                Duration (hours)
              </Label>
              <Input
                id="duration"
                type="number"
                min="0.5"
                step="0.5"
                value={newEvent.duration}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    duration: e.target.value,
                  })
                }
                className="mt-1 rounded-2xl border-[#A78BFA]/20 focus:border-[#A78BFA]"
              />
            </div>

            {/* Color Picker */}
            <div>
              <Label className="text-[#4A4458]">Color</Label>
              <div className="mt-2 flex gap-2">
                {eventColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() =>
                      setNewEvent({
                        ...newEvent,
                        color: color.value,
                      })
                    }
                    className={`w-10 h-10 rounded-full transition-all ${
                      newEvent.color === color.value
                        ? "ring-2 ring-[#4A4458] ring-offset-2"
                        : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleCreateEvent}
                className="flex-1 rounded-full bg-[#A78BFA] hover:bg-[#9270F0]"
                disabled={!newEvent.title || !newEvent.time}
              >
                Create Event
              </Button>
              <Button
                onClick={() => {
                  setIsCreateDialogOpen(false);
                  setNewEvent({
                    title: "",
                    time: "",
                    duration: "1",
                    color: "#A78BFA",
                  });
                  setSelectedDate(null);
                }}
                variant="outline"
                className="rounded-full border-[#A78BFA]/30"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}