import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { filter, map, reduce, pluck } from 'rxjs/operators';

@Injectable()
export class ApiCallService {
  
  //build URL to be called by HttpClient
    base_url: string = 'https://www.alphavantage.co/query?function='
    timeSeries: string = 'TIME_SERIES_INTRADAY'
  
    base_symbol: string = '&symbol='
    symbol: string = ''
  
    base_interval: string = '&interval='
    interval: string = '60min';
  
    base_apiKey: string = '&apikey='
    apiKey: string = '0OOOD0F61M3YBRBV';
    
    //FormattedData!
    stockArray: any;
                
  constructor(private http: HttpClient) { }
  
  
  flatten(arr) {
    return [].concat(...arr)
  }
  
  deepFlatten(arr) {
    return this.flatten(
      arr.map(x=>             
        Array.isArray(x)      
          ? this.deepFlatten(x)   
          : x                 
      )
    )
  }
  
  getData(){
    console.log(this.symbol, "hit");
    let url = this.base_url + this.timeSeries + this.base_symbol +
              this.symbol + this.base_interval + this.interval +
              this.base_apiKey + this.apiKey;
    return this.http.get(url)
      .pipe(
        //pulls first layer out of nested object.
        pluck("Time Series (60min)"),
        
        /*This map function creates a triple-nested array 
        out of original nested object API. Thsis will will 
        allow me to access deeply nested values with .map functions*/
        map( (data: any) => {
          let stockHourly = [];
          for (let key in data){
            stockHourly.push(Object.entries(data[key]))
          }
          console.log(stockHourly)
          return stockHourly;
        }),
        
        /*This map function digs into the bottom layer of our 
        triple-nested array and removes the number from the label string"
        for ex: "4. open" => "open"*/
        map( (topArray: any) => {
          return topArray
            .map( (middleArray) => {
            return middleArray
              .map( (bottomArray) => {
                let labels = bottomArray[0];
                let values = bottomArray[1];
                return [labels.slice(3), values];
              })
            })
        }),
        
        /*This map function flattens our triple-nested array 
        into a single array with consecutive values.
        ex: ["open", 78.70, "high", 80, "low", 44, ...]
        where matching values line up one after the other*/
        map ( (array: any) => {
          return this.deepFlatten(array);          
        }),
        
        /*populates the single array from the previous map function 
        into an array of matching label and value arrays.
        ex: [["open", 78.70],["high", 80],["low", 44], ...]
        this will allow me to then call a reducer function*/
        map ( (array: any) => {
          let array2D = [];
          for (let i = 0; i <= array.length; i++){
            array2D.push( [array[i],array[i+1]] )
            i++;
          }
          return array2D;
        }),
        
        /*this map function calls a reducer function on our array of 2d
        arrays "array2d" and organizes that data into 5 objects with 
        properties label and data, where label refers to the kind of data
        found in the data property, which contains
        all of the data within an array*/
        map ( (array2d: any) => {
          function reducer(newArray, [label, value]){
          /*Step 1a:
            If object at position newArray[label]'s' "data" poperty has been populated
            at least once, from step 2. 
            This step carries the object over to step 2, and continues to populate 
            its "data" property with matching values*/
            newArray[label] = newArray[label] ||
  
          /*step 1b:
            If no object at position newArray[label] exists
            This step instantiates the object with our wanted 
            structure at position newArray[label.
            There will only be 5 positions in the newArray, 
            since there are only 5 distinct labels*/
            //or
            {"data": [], "label": label};
  
          /* step 2: 
            This step pushes our values into either:
            a) the empty "data" property of our newly created object or
            b} the existing "data" property of our carried-over object.
            both refer to the object in index "label" of newArray*/
            newArray[label].data.push(value);
  
          //Return our newArray of objects
            return newArray;
          }

        /*Object.values give our reducer funcion access to the sub-Arrays 
        within our array2d, our reducer function does the steps described
        above, finally we return our newly formatted array of objects.*/
        let formattedData =  Object.values(array2d.reduce(reducer, {}));
        this.stockArray = formattedData;
        return formattedData;
        }),
        /*The previous step created a 6th entry in formatted data 
        with undefined values, this map function removes it.*/
        map ( (formattedData: any) => {
          let undefObject = formattedData.splice(5,1)
          return formattedData;
        })
      )
  }
}
