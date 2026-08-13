export const formatTime = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export const formatDay = (date) => {
    if (!date) return "";

    const value = new Date(date);
    const today = new Date();
    const yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (a, b) => a.toDateString() === b.toDateString();

    if (isSameDay(value, today)) return "Today";
    if (isSameDay(value, yesterday)) return "Yesterday";

    return value.toLocaleDateString([], { day: "2-digit", month: "short", year: "numeric" });
}
