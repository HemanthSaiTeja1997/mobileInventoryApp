import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDateFormater'
})
export class ShortDateFormaterPipe implements PipeTransform {

transform(value: string): string {
    if (!value) return '';

    // Parse "12-05-2022 05:24:07" => new Date(2022, 4, 12)
    const [datePart] = value.split(' ');
    const [day, month, year] = datePart.split('-');

    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${day}-${shortMonths[Number(month) - 1]}-${year.slice(2)}`;

}
}