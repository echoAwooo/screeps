require( "_resources" );

Object.defineProperties( Store.prototype, {
    isFull: {
        get: function () {
            if ( this._isFull === undefined ) this._isFull = this.getUsedCapacity() === this.getCapacity();
            return this._isFull;
        }
    },
    isEmpty: {
        get: function () {
            if ( this._isEmpty === undefined ) this._isEmpty = this.getFreeCapacity() === this.getCapacity();
            return this._isEmpty;
        }
    }
} );