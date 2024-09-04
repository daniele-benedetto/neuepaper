const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export function getMonthAndYear(date: string) {
    const [year, month] = date.split('-');
    return `${months[parseInt(month) - 1]} ${year}`;
}