
# @pvanvuuren/quickloader

This allows the easy integration of skeleton elements in angular

# How to Use

## CSS Import
Add an import for the skeleton class from the package's folder in node_modules, like below.


    @import '~@pvanvuuren/quickloader/skeleton.scss';
  ## Template Reference
  Much like the `*ngIf` directive `placeHolderIf` can be used to alter the element based on the condition given to it. If the condition that is given is true, it will make the element a skeleton element by adding the `skeleton` class to it. If the given condition is false the styling would not be applied.

You can reference it as follows:

      [placeholderIf]="<Condition>" 
## Example of usage
### Typescript
Lets say you have an observable that populates an object of type `salesOrderModel` called `salesOrder`.

    export  class  salesOrderModel{
	    constructor(public  item:string,public  quantity:number,public price:number)
	    {
	    }
    }
    
>The `salesOrder` object would be undefined until the observable returns it a value,  so that is what we are going to use for our condition.
### HTML Template
Lets say we have a `mat-card` that we populate with data from our `salesOrder` object.
We would then reference the directive, and assign it the condition `!(salesOrder)` so that it remains true until the element has a value.
> Empty elements don't display, thats why we need to add a `&nbsp;` to the elements. This is done conditionally of course.
> If the `salesOrder` object is undefined add `&nbsp;` , otherwise add a value 
> `{{salesOrder!=undefined ? 'Item' :'&nbsp;'}}`
> If the `salesOrder.item` property is undefined, add a `&nbsp;` , Otherwise add the value of `salesOrder.item`
> `{{salesOrder?.item||'&nbsp;'}}`

    <mat-card>
	    <mat-card-content>
		    <h2  [placeholderIf]="!(salesOrder)">{{salesOrder!=undefined ? 'Item' :'&nbsp;'}}</h2>
		    <h1  [placeholderIf]="!(salesOrder)"> {{salesOrder?.item||'&nbsp;'}}</h1>
		    <h2  [placeholderIf]="!(salesOrder)">{{salesOrder!=undefined ? 'Quantity' : '&nbsp;'}}</h2>
		    <h1  [placeholderIf]="!(salesOrder)"> {{salesOrder?.quantity||'&nbsp;'}}</h1>
		    <h2  [placeholderIf]="!(salesOrder)">{{salesOrder!=undefined ? 'Price' : '&nbsp;'}}</h2>
		    <h1  [placeholderIf]="!(salesOrder)"> {{salesOrder?.price |currency:'ZAR' ||'&nbsp;'}}</h1>
	    </mat-card-content>
	    <mat-card-actions>
		    <button  [placeholderIf]="!(salesOrder)"  mat-flat-button  mat-button  [color]="'accent'">Ok</button>
	    </mat-card-actions>
    </mat-card>
### Custom CSS Formatting
So lets say you need another color for your skeleton element, or you want to change the speed of the animation, you can edit the styles as follows :
>These are all of the style properties currently changed by the `placeholderIf` directive. and can be referenced and changed exactly like below.
>The animation loops perfectly in 5s increments.

     .skeleton {
      margin-bottom: 10px;
      padding-left: 10%;
      padding-right: 10%;
      color:transparent;
      animation: loading 15s forwards infinite linear;
      background: #f6f7f8;
      background-image: -webkit-linear-gradient(to left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 60%);
      background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 60%);
    }
    img.skeleton{
      opacity: 0;
    }
    
    @keyframes loading{
      0% { background-position: 0vw} 
      100% { background-position: 112vw}
      
    }
    
