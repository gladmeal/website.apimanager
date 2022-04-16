import React from "react";

export default class FormState extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            queries: this._getUrlData()
        };
        this.update = 'update' in this.state.queries;
    }

    _splitUrlDataItem( str = '' ) {
        const parts = str.split( '=' );
        return {
            key: parts[ 0 ],
            value: parts[ 1 ]
        };
    }

    _splitUrlData( str = '' ) {
        const 
            result = {},
            data = str.split( '&' );
                data.forEach( item => {
                    const 
                        data = this._splitUrlDataItem( item );
                    result[ data.key ] = data.value;
                } );
        return result;
    }

    _getUrlData() {
        const 
            url = window.location.href,
            queries = url.split( '?' )[ 1 ];
            if ( !queries )
                return {};
        return this._splitUrlData( queries );
    }
};