import { format } from 'date-fns'

export function dateToString(date) {
    if (!date) { return ''; }
    return format(date, 'yyyy年m月d日 HH時間mm分');
};
