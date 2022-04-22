import React from "react";
import './FormControl.scss';

export class FormControlSelected extends React.Component{
    render() {
      return (
        <div className="form-control-selected d-flex align-items-center px-3 py-2 m-1">
          <p className="m-0"> { this.props.name || 'name' } </p>
          <div 
            className="form-control-select-close d-flex justify-content-center align-items-center ms-3"
            onClick={ this.props.onClose }
          >
              <i className="bi bi-x-octagon-fill"></i>
          </div>
        </div>
      )
    }
};

export class FormControlModalItem extends React.Component{
    render() {
      return (
        <div { ...this.props }  className="form-control-modal-item d-flex align-items-center w-100 px-3 py-3 mt-3 border-bottom">
            <i className="bi bi-puzzle-fill me-3"></i>
            <p className="m-0"> { this.props.name || 'Modal item' } </p>
        </div>
      )
    }
};

export default class FormControl extends React.Component{
    constructor( props ) {
        super( props );
        this.ref = React.createRef();
        this.showModal = true;
        this.unmount = false;
        this.state = {
            label: this.props.label || 'label',
            modalVisible: false,
            multiple: this.props.multiple !== undefined ? this.props.multiple : true,
            file: undefined,
            value: undefined,
            valueData:  this.props.value || '',
            dataUrl: this.props.url || '',
            error: this.props.error || '',
            icon: this.props.icon || 'image-fill',
            selectedVisible: true,
            selected: [ ],
            evalableExtension: this.props.extensions || [ ],
            maxSize: this.props.maxSize || 3.5
        };
    }

    _getOptions() {
        return this.props.options || [ ];
    }

    _getNativeSelected() {
        return this.props.selected || [];
    }

    componentDidUpdate() {
        if ( !this.state.multiple ) {
            if ( this.props.selected !== undefined ) {
                const 
                    item = this._getOptions().find( item => item.id === this.props.selected );
                if ( this.ref && item ) this.ref.current.value = item.value;
            }
        } 
    }

    componentDidMount() {
        this.unmount = false;
        if ( !this._getOptions().length ) {
            this._hideSelect();
        }

        if ( !this.state.multiple ) {
            if ( this.props.selected !== undefined ) {
                const 
                    item = this._getOptions().find( item => item.id === this.props.selected );
                if ( this.ref && item ) this.setState( {
                    valueData: item.valu
                } );
            }
        } 

       if ( this.state.multiple && this.props.type === 'select' ) {
            document.addEventListener( 'data:selected', ( e ) => (
                !this.unmount && this._addSelected( e.detail )
            ) )
       }
    }

    componentWillUnmount() {
        this.unmount = true;
    }

    getValue() {
        return this.props.type === 'select' ? this.state.selected : (
            this.props.type === 'file' ? this.state.file : this.state.value
        );
    }

    _hideSelect() {
        this.setState( {
            selectedVisible: false
        } );
    } 

    _showSelect() {
        this.setState( {
            selectedVisible: true
        } );
    }

    _closeModal() {
        this.setState( {
            modalVisible: false
        } );
    }

    _openModal() {
        if ( this._getOptions().length && this.showModal ) {
            this.setState( {
                modalVisible: true
            } );
        }
    }

    _getSelected() {
        return this.state.selected;
    }

    _getNotSelected() {
        const 
            result = [];
                this._getOptions().forEach( item => {
                    if ( this._getSelected().find( _item => _item.id === item.id ) === undefined ) 
                        result.push( item );
                } );
            this.showModal = result.length !== 0;
        return result;
    }

    _addSelected( items ) {
        this.setState( {
            selected: [ ...this.state.selected, ...items ]
        }, () => {
            this._closeModal();
            return this._doOnChange();
        } );
    }

    _removeSelected( item ) {
        const 
            final = [];
                this.state.selected.forEach( _item => (
                    item.id !== _item.id && final.push( _item )
                ) );
        this.setState( {
            selected: final
        } );
    }

    _doOnChange( val ) {
        if ( typeof this.props.onChange === 'function' ) {
            this.props.onChange( 
                this.props.multiple ? this._getSelected().map( item => item.id ) :
                val || this.state.value
            );
        }
    }

    _modalItemClick( item ) {
        if ( this.state.multiple ) 
            return this._addSelected( [ item ] );
            console.log( item )
        this._closeModal();
        this.setState( {
            value: item.id,
            valueData: item.value
        }, () => this._doOnChange( item.id ) );
    }

    _seletedInput( e ) {
        e.preventDefault();
        e.stopPropagation();
    } 

    _verifyFileInfos( ex, size ) {
        if ( size >= this.state.maxSize ) {
            this.setState( {
                error: `File is too heavy`
            } );
            return false;
        }

        for( const _ex of this.state.evalableExtension ) {
            if ( _ex.toLowerCase() === ex.toLowerCase() )
                return true; 
        }

        this.setState( {
            error: 'Invalid file extension'
        } );
        
        return false;
    }

    _verifyFile( file, url = '' ) {
        const 
            ex = file.name.split(  '.' ).pop(),
            size = file.size / 1024 / 1024;
        if ( this._verifyFileInfos( ex, size ) ) {
            this.setState( {
                dataUrl: url,
                error: ''
            } );

            if ( typeof this.props.onChange === 'function' )
                this.props.onChange( {
                    file, url
                } );
        }
    }

    _onChange( context ) {
        const 
            file = context.files[ 0 ];
        if ( file instanceof File ) {
            const 
                reader = new FileReader();
                    reader.onload = ( e ) => (
                        this._verifyFile( file, e.target.result )
                    );

                    reader.addEventListener( 'abort', () => {
                        this.setState( {
                            error: 'Request abort'
                        } );
                    } );

                    reader.addEventListener( 'error', () => {
                        this.setState( {
                            error: 'error during image loading'
                        } );
                    } );
            reader.readAsDataURL( file );
        }
    }

    _onInput( e ) {
        this.setState( {
            value: e.target.value
        } );
    }

    render() {
        if ( this.props.type === 'select' ) {
            return (
                <div className="w-100 form-control-select-container">
                    <div
                        className={ `position-fixed w-100 h-100 justify-content-center align-content-center form-control-modal ${ this.state.modalVisible ? 'd-flex': 'd-none' }`}
                    >
                        <div className="d-flex flex-column form-modal-data-container p-3">
                            <div className="d-flex form-modal-head align-items-center border-bottom pb-3">
                                <div className="form-modal-head-brand ps-3">
                                    { this.props.name || this.props.title || 'My title' }
                                </div>
                                <div 
                                    className="form-modal-button d-flex justify-content-center align-items-center mx-3"
                                    onClick={ () => this._closeModal() }
                                >
                                    <i className="bi bi-x-octagon-fill"></i>
                                </div>
                            </div>
                            <div className="d-flex flex-column form-modal-body align-items-center">
                                { this._getNotSelected().map( item => (
                                    <FormControlModalItem 
                                        name={ item.value } 
                                        key={ item.id } 
                                        onClick={ () => this._modalItemClick( item ) }
                                    />
                                )  ) }
                            </div>
                        </div>
                    </div>
                    { this.state.multiple && (
                        <React.Fragment>
                            <div className="w-100 d-flex align-items-center form-control-content-seleted mb-3">
                                { this._getSelected().length > 0 && this._getSelected().map( item => (
                                    <FormControlSelected 
                                        name={ item.value } 
                                        key={ item.id }
                                        onClose={ () => this._removeSelected( item ) }
                                    />
                                ) ) }
                            </div>
                        </React.Fragment>
                    ) }
                    <div className="form-floating form-control-container">
                        <input 
                            type={ this.props.type || 'text' }
                            defaultValue={ this.state.valueData }
                            id={ this.props.id }
                            className={ `form-control ${ this.props.className || ''}` }
                            placeholder={ this.props.placeholder || 'Az:' } 
                            onClick={ () => this._openModal() }
                            onKeyUp={ () => this._seletedInput }
                            onKeyDown={ () => this._seletedInput }
                            onInput={ () => this._seletedInput }
                            ref={ this.ref }
                        />
                        <label htmlFor={ this.props.id }>
                            { this.props.label }
                        </label>
                    </div>
                </div>
            );
        } else {
            if ( this.props.type === 'file' ) {
                return (
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center py-3 form-control-file">
                        <input 
                            { ...this.props } 
                            className={ `form-control d-none ${ this.props.className || '' }`}
                            ref={ this.ref }
                            onChange={ ( e ) => this._onChange( e.target ) }
                        />
                        <label htmlFor={ this.props.id } className="d-flex justify-content-center align-items-center">
                            { !this.state.dataUrl && (
                                <i className={ `bi bi-${ this.state.icon }` }></i>
                            ) }
                            { !!this.state.dataUrl && (
                                <img src={ this.state.dataUrl } alt="images data" />
                            ) }
                        </label>
                        <p className="m-0 pt-2 text-danger w-100 text-center">
                            { this.state.error }
                        </p>
                    </div>
                );
            } 
        }
        return (
            <div className="form-floating form-control-container">
                <input 
                    className={ `form-control ${ this.props.className || ''}`}
                    type={ this.props.type || 'text' }
                    defaultValue={ this.props.valueData }
                    id={ this.props.id }
                    placeholder={ this.props.placeholder || 'Az:' } 
                    onInput={ e => this._onInput( e ) }
                    onChange={ this.props.onChange }
                    name={ this.props.name }
                    ref={ this.ref }
                />
                <label htmlFor={ this.props.id }>
                    { this.props.label }
                </label>
            </div>
        )
    }
};