### *Description: A completely responsive datepicker utility designed for angular components*.

<p align="center"><a href="https://imgbb.com/"><img src="https://i.ibb.co/0K05Sy2/Datepicker1.png" alt="Datepicker1" border="0"></a></p>

#### Installation:
1. npm install , ng serve.

#### Usage:
1.  npm i angular-custom-datepicker.
2.  Inside app.module.ts=> import {AngularCustomDatepickerModule} from 'angular-custom-datepicker';
3.  Inside any component, simple use as:- 
   
```
<date-picker
[disabled]="false" // to disable the datepicker
[placeholder]="Select Date" //placeholder value , String format
[selectedValue]="selectedVal" // Preselect date ,'YYYY-MM-DD' format
[min]="minDate" // 'YYYY-MM-DD' format
[max]="maxDate" // 'YYYY-MM-DD' format
(SelectedDate)="dateSelected($event)" //Functions which emits the Date-object on selection
></date-picker>
```
*More Information regarding inputs:-*
```
1. [min]: (Non-Mandatory)-String (YYYY-MM-DD) To be used when you have to set a minimum date beyond which no date can be selected.
2. [max]: (Non-Mandatory)-String (YYYY-MM-DD) To be used when you have to set a maximum date exceeding which no date can be selected.
3. [placeholder]:(Non-Mandatory)-String Value ,Default Value: 'Select Date'.To be used when you have to provide a particular value to the datepicker placeholder.
4. [selectedValue]: (Non-Mandatory)-String Value (YYYY-MM-DD) To be used when you have to preselect a date.
5. [disabled]: (Non-Mandatory)-Boolean Value-(true/false) To be used when you have to disable the datepicker though, you can still use [selectedValue].
6. (SelectedDate) : (Mandatory)-Function . It basically emits the date-object when a user clicks on a particular date.

```
