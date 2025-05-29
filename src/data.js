 export const API_KEY = 'AIzaSyBf0BeOGBhNRAEfM7QLmWbhdG25RPumS1A';

export const value_converter = (value) =>{
      if(value>=1000000)
      {
        return Math.floor(value/1000000)+"M";
      }
      else if(value>=1000)
      {
        return Math.floor(value/1000)+"k"
      }
      else{
        return value;
      }
 } 