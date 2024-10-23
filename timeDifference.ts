export const timeDifference = (date: any) => {
    const currDate: Date = new Date();
    const originalDate: Date = new Date(date);

    const differenceInMilliseconds = currDate.getTime() - originalDate.getTime();
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    const seconds = differenceInSeconds % 60;
    const minutes = Math.floor(differenceInSeconds / 60);
    const hours = Math.floor(differenceInSeconds / 3600);
    const days = Math.floor(differenceInSeconds / 86400);
    if (days > 1) {
        return `${days} days ago`;
    } else if (days === 1) {
        return `1 day ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return seconds > 0 ? `${seconds} second${seconds > 1 ? 's' : ''} ago` : 'Just now';
    }
}
