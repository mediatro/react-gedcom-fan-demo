import React, {useEffect, useState} from 'react';

export const FanJqAdapter = () => {

    const [firstLoad, setFirstLoad] = useState(true);

    const getGedcomUrl = () => '/1 GENEALOGIE Nathalie DELEAU AU 19 12 2016_export.ged';

    useEffect(() => {
        setFirstLoad(false);
    },[]);

    useEffect(() => {
        if(!firstLoad) {
            window.isReady = true;
            import('arbre-o-matic/assets/scripts/arbreomatic/main').then((m) => {
                m.loadExternal(getGedcomUrl());
            });
        }
    },[firstLoad]);

    return (
        <div className="contents">
            <svg id="logo" width="160" height="100" style={{display:'none'}}></svg>

            <div className="row">
                <div className="col-4" id="toolbar">
                    <div style={{display: "none"}}>
                        <h4>{__('arbreomatic.gedcom_file')}</h4>

                        <p>{__('arbreomatic.privacy')}</p>




                        <div className="file btn btn-lg btn-success file-button col-12" >
                            <i className="fas fa-folder-open fa-fw" aria-hidden="true"></i>
                            {__('arbreomatic.load_gedcom')}
                            <input type="file" name="file" id="file" accept=".ged,.gedcom" />
                        </div>


                        <hr/>
                    </div>

                    <h4>{__('arbreomatic.root')}</h4>

                    <p>
                        {__('arbreomatic.choose_root')}
                    </p>
                    <div className="row-fluid col-xs-12">
                        <label style={{width: "100%"}}>
                            <select id="individual-select" className="col-xs-12" data-live-search="true" data-width="100%" disabled>
                            </select>
                        </label>
                    </div>


                    <hr/>

                    <h4>{__('common.export')}</h4>

                    <p>
                        {__('arbreomatic.print_or_download')}
                    </p>

                    <p>
                        <a className="btn btn-lg btn-primary col-12 disabled" id="print" href="#" role="button">
                            <i className="fas fa-print fa-fw" aria-hidden="true"></i>
                            {__('common.print_ellipsis')}
                        </a>
                    </p>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle col-12" type="button" id="download-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
                            <i className="fas fa-download fa-fw" aria-hidden="true"></i>
                            {__('common.download')}
                        </button>
                        <div className="dropdown-menu col-12" aria-labelledby="download-menu">
                            <h6 className="dropdown-header">(' arbreomatic.vector_formats')}</h6>
                            <a className="dropdown-item" id="download-pdf" href="#">
                                <i className="far fa-file-pdf fa-fw fa-lg" aria-hidden="true"></i>
                                {__('arbreomatic.file_type_list.pdf')}
                            </a>
                            <a className="dropdown-item" id="download-svg" href="#">
                                <i className="far fa-file-code fa-fw fa-lg" aria-hidden="true"></i>
                                {__('arbreomatic.file_type_list.svg')}
                            </a>
                            <h6 className="dropdown-header">(' arbreomatic.raster_formats')}</h6>
                            <a className="dropdown-item" id="download-png-transparency" href="#">
                                <i className="far fa-file-image fa-fw fa-lg" aria-hidden="true"></i>
                                {__('arbreomatic.file_type_list.png_transparent')}
                            </a>
                            <a className="dropdown-item" id="download-png-background" href="#">
                                <i className="far fa-file-image fa-fw fa-lg" aria-hidden="true"></i>
                                {__('arbreomatic.file_type_list.png_white_background')}
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col-8" id="preview">

                    <div id="initial-group">
                        <h5>{__('arbreomatic.click_to_load_ellipsis')}</h5>
                        <em>({__('arbreomatic.or_drag_and_drop')})</em>
                    </div>

                    <div id="map">
                        <svg id="fan"></svg>
                    </div>

                    <div id="preview-group" style={{display: "none"}}>
                        <button type="button" className="btn btn-light button-zoom" id="zoom-plus" title="${__('
                               arbreomatic.zoom_in')}">
                            <i className="fas fa-plus" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="btn btn-light button-zoom" id="zoom-reset" title="${__('
                               arbreomatic.zoom_reset')}">
                            <i className="far fa-dot-circle" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="btn btn-light button-zoom" id="zoom-minus" title="${__('
                               arbreomatic.zoom_out')}">
                            <i className="fas fa-minus" aria-hidden="true"></i>
                        </button>

                        <span id="tip"><i className="fas fa-arrows-alt" aria-hidden="true"></i>
                            <em>{__('arbreomatic.use_mouse')}</em>
                        </span>
                    </div>
                </div>

                <div className="col-12" id="advanced" style={{display: "none"}}>

                    <div className="row no-gutters">
                        <div className="col-6">

                            <h5>
                                {__('arbreomatic.informations')}</h5>

                            <div className="form-group row mb-3">
                                <label for="max-generations" className="col-form-label col-8">{__('arbreomatic.generation_count')}</label>
                                <div className="input-group col-4">
                                    <input className="form-control parameter" type="number" id="max-generations" min="1" max="10" value="8" disabled/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="form-check-label col-form-label col-6" for="select-dates">{__('arbreomatic.dates_format')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-dates" disabled>
                                        <option value="0" selected>{__('arbreomatic.date_yyyy')}</option>
                                        <option value="1">{__('arbreomatic.date_ddmmyyyy')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row my-2">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="show-invalid-dates" checked disabled/>
                                        <label className="form-check-label" for="show-invalid-dates">{__('arbreomatic.display_invalid_dates')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="form-check-label col-form-label col-6" for="select-places">{__('arbreomatic.places_format')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-places" disabled>
                                        <option value="0">{__('arbreomatic.places_format_list.full')}</option>
                                        <option value="1" selected>{__('arbreomatic.places_format_list.city_only')}</option>
                                        <option value="2">{__('arbreomatic.places_format_list.nothing')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mt-4 mb-3">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="show-marriages" checked disabled/>
                                        <label className="form-check-label" for="show-marriages">{__('arbreomatic.display_marriages')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="form-check-label col-form-label col-6" for="select-name-order">{__('arbreomatic.names_order')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-name-order" disabled>
                                        <option value="0" selected>{__('arbreomatic.names_order_list.given_surname')}</option>
                                        <option value="1">{__('arbreomatic.names_order_list.surname_given')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <label className="form-check-label col-form-label col-6" for="select-name-display">{__('arbreomatic.names_to_display')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-name-display" disabled>
                                        <option value="0" selected>{__('arbreomatic.names_to_display_list.all')}</option>
                                        <option value="1">{__('arbreomatic.names_to_display_list.first')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mt-3 mb-3">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="substitute-events" checked disabled/>
                                        <label className="form-check-label" for="substitute-events">{__('arbreomatic.substitute_missing_events')} <i className="fas fa-question-circle" data-toggle="tooltip" title="${__('arbreomatic.substitute_missing_events_hint')}"></i></label>
                                    </div>
                                </div>
                            </div>

                            <h5>{__('arbreomatic.recent_people')}</h5>

                            <div className="form-group row my-2">
                                <label className="form-check-label col-form-label col-6" for="select-hidden-generations">{__('arbreomatic.informations_to_hide')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-hidden-generations" disabled>
                                        <option value="0" selected>{__('arbreomatic.informations_to_hide_list.none')}</option>
                                        <option value="1">{__('arbreomatic.informations_to_hide_list.events')}</option>
                                        <option value="2">{__('arbreomatic.informations_to_hide_list.all_but')}</option>
                                        <option value="3">{__('arbreomatic.informations_to_hide_list.all')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="hidden-generations-count" className="col-form-label col-8">{__('arbreomatic.affected_generations')}</label>
                                <div className="input-group col-4">
                                    <input className="form-control parameter" type="number" id="hidden-generations-count" min="1" max="8" value="1" disabled/>
                                </div>
                            </div>

                            <h5>{__('arbreomatic.format')}</h5>

                            <div className="form-group row mt-3">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="show-missing" disabled/>
                                        <label className="form-check-label" for="show-missing">{__('arbreomatic.display_empty_boxes')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-2 mb-2">
                                <label for="fan-angle" className="col-form-label col-8">{__('arbreomatic.fan_angle')}</label>
                                <div className="input-group col-4">
                                    <input className="form-control parameter" type="number" id="fan-angle" min="180" max="360" value="270" aria-describedby="inputGroupPrepend" disabled/>
                                    <div className="invalid-feedback">
                                        {__('arbreomatic.choose_an_angle')}
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupPrepend">°</span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-2">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="show-chronology" disabled/>
                                        <label className="form-check-label" for="show-chronology">{__('arbreomatic.chronology')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="invert-text-arc" disabled/>
                                        <label className="form-check-label" for="invert-text-arc">{__('arbreomatic.adapt_text_layout')}</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-6">

                            <h5>{__('arbreomatic.annotations')}</h5>

                            <div className="form-group row mb-3">
                                <label for="title" className="col-form-label col-6">{__('arbreomatic.primary_title')}</label>
                                <div className="input-group col-6">
                                    <input className="form-control parameter" type="text" id="title" placeholder={__('common.none')} disabled/>
                                </div>
                            </div>

                            <h5>{__('arbreomatic.measurements')}</h5>
                            <h6>{__('arbreomatic.title_title')}</h6>

                            <div className="form-group row mb-2">
                                <div className="form-group row mb-2">

                                    <label for="title-size" className="col-form-label col-6">{__('arbreomatic.title_size')}</label>
                                    <div className="input-group col-6 my-auto">
                                        <input type="range" className="custom-range parameter" id="title-size" min="50" max="250" value="100" disabled/>
                                    </div>

                                    <label for="title-margin" className="col-form-label col-6">{__('arbreomatic.title_margin')}</label>
                                    <div className="input-group col-6 my-auto">
                                        <input type="range" className="custom-range parameter" id="title-margin" min="0" max="250" value="25" disabled/>
                                    </div>

                                </div>
                            </div>

                            <h6>{__('arbreomatic.strokes')}</h6>

                            <div className="form-group row mb-2">
                                <label for="stroke-weight" className="col-form-label col-6">{__('arbreomatic.stroke_weight')}</label>
                                <div className="input-group col-6 my-auto">
                                    <input type="range" className="custom-range parameter" id="stroke-weight" min="5" max="30" value="20" disabled/>

                                </div>
                            </div>

                            <h6>{__('arbreomatic.box_sizes')}</h6>

                            <div className="form-group row mb-2">

                                <label for="weightg1" className="col-form-label col-6">{__('arbreomatic.box_sizes_list.generation_1')}</label>
                                <div className="input-group col-6 my-auto">
                                    <input type="range" className="custom-range parameter" id="weightg1" min="90" max="250" value="100" disabled/>
                                </div>

                                <label for="weightg2" className="col-form-label col-6">{__('arbreomatic.box_sizes_list.generation_2_4')}</label>
                                <div className="input-group col-6 my-auto">
                                    <input type="range" className="custom-range parameter" id="weightg2" min="90" max="250" value="100" disabled/>
                                </div>

                                <label for="weightg3" className="col-form-label col-6">{__('arbreomatic.box_sizes_list.generation_5_8')}</label>
                                <div className="input-group col-6 my-auto">
                                    <input type="range" className="custom-range parameter" id="weightg3" min="90" max="250" value="170" disabled/>
                                </div>

                                <label for="weightg4" className="col-form-label col-6">{__('arbreomatic.box_sizes_list.generation_9_plus')}</label>
                                <div className="input-group col-6 my-auto">
                                    <input type="range" className="custom-range parameter" id="weightg4" min="90" max="250" value="140" disabled/>
                                </div>
                            </div>

                            <h6>{__('arbreomatic.raster_size')}</h6>

                            <div className="form-group row mb-3">
                                <label for="size-pixels" className="col-form-label col-8">{__('arbreomatic.width_pixels')}</label>
                                <div className="input-group col-4">
                                    <input className="form-control parameter" type="number" id="size-pixels" min="200" max="6000" value="3000" aria-describedby="size-pixels-prepend" disabled/>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="size-pixels-prepend">px</span>
                                    </div>
                                </div>
                            </div>

                            <h5>{__('arbreomatic.colors')}</h5>

                            <div className="form-group row mb-2">
                                <label for="color-individuals" className="col-form-label col-7">{__('arbreomatic.individual_box')}</label>
                                <div className="input-group col-5 colorpicker-group">
                                    <input type="text" className="form-control" id="color-individuals" value="#ffffff" />
                                    <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label for="color-marriages" className="col-form-label col-7">{__('arbreomatic.marriage_box')}</label>
                                <div className="input-group col-5 colorpicker-group">
                                    <input type="text" className="form-control" id="color-marriages" value="#efefef" />
                                    <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input parameter" id="text-contrast" checked disabled/>
                                        <label className="form-check-label" for="text-contrast">{__('arbreomatic.automatic_text_contrast')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mb-3 mt-3">
                                <label className="form-check-label col-form-label col-6" for="select-color-scheme">{__('arbreomatic.dynamic_coloring')}</label>
                                <div className="input-group col-6">
                                    <select className="form-control parameter" id="select-color-scheme" disabled>
                                        <option value="none" selected>{__('arbreomatic.dynamic_coloring_list.disabled')}</option>
                                        <option value="sex">{__('arbreomatic.dynamic_coloring_list.gender')}</option>
                                        <option value="generation">{__('arbreomatic.dynamic_coloring_list.generation')}</option>
                                        <option value="agedeath">{__('arbreomatic.dynamic_coloring_list.age_at_death')}</option>
                                        <option value="agemarriage">{__('arbreomatic.dynamic_coloring_list.age_at_marriage')}</option>
                                        <option value="birthdate">{__('arbreomatic.dynamic_coloring_list.birth_date')}</option>
                                        <option value="birthtown">{__('arbreomatic.dynamic_coloring_list.birth_town')}</option>
                                        <option value="birthdepartement">{__('arbreomatic.dynamic_coloring_list.birth_department')}</option>
                                        <option value="patronym">{__('arbreomatic.dynamic_coloring_list.surname')}</option>
                                        <option value="signature">{__('arbreomatic.dynamic_coloring_list.can_sign')}</option>
                                        <option value="occupation">{__('arbreomatic.dynamic_coloring_list.occupation')}</option>
                                        <option value="childrencount">{__('arbreomatic.dynamic_coloring_list.children_count')}</option>
                                    </select>
                                </div>
                            </div>

                            <div id="group-color-dual" className="group-color" style={{display: "none"}}>
                                <div className="form-group row mb-2">
                                    <label for="color1" className="col-form-label col-7">{__('arbreomatic.color_list.color_1')}</label>
                                    <div className="input-group col-5 colorpicker-group">
                                        <input type="text" className="form-control" id="color1" value="#ffffff" />
                                        <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="color2" className="col-form-label col-7">{__('arbreomatic.color_list.color_2')}</label>
                                    <div className="input-group col-5 colorpicker-group">
                                        <input type="text" className="form-control" id="color2" value="" />
                                        <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div id="group-color-gradient" className="group-color" style={{display: "none"}}>
                                <div className="form-group row mb-2 gradient-group">
                                    <label for="color-start" className="col-form-label col-7">{__('arbreomatic.min_value')}</label>
                                    <div className="input-group col-5 colorpicker-group">
                                        <input type="text" className="form-control" id="color-start" value="" />
                                        <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group row gradient-group">
                                    <label for="color-end" className="col-form-label col-7">{__('arbreomatic.max_value')}</label>
                                    <div className="input-group col-5 colorpicker-group">
                                        <input type="text" className="form-control" id="color-end" value="" />
                                        <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div id="gradient-preview" className="col-6 offset-3 mt-3"></div>
                            </div>

                            <div id="group-color-textual" className="group-color" style={{display: "none"}}>

                                <div className="form-group row mt-2">
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="textual-mode" id="textual-mode1" value="0" checked/>
                                            <label className="form-check-label" for="textual-mode1">
                                                {__('arbreomatic.automatic_palette')}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input parameter" id="random-selection" checked disabled/>
                                            <label className="form-check-label" for="random-selection">{__('arbreomatic.random_assignment')}</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row mt-2">
                                    <label for="saturation" className="col-form-label col-6">{__('arbreomatic.color_saturation')}</label>
                                    <div className="input-group col-6 my-auto">
                                        <input type="range" className="custom-range parameter" id="saturation" min="0" max="100" value="100" disabled/>
                                    </div>

                                    <label for="value" className="col-form-label col-6">{__('arbreomatic.color_value')}</label>
                                    <div className="input-group col-6 my-auto">
                                        <input type="range" className="custom-range parameter" id="value" min="0" max="100" value="85" disabled/>
                                    </div>
                                </div>


                                <div className="form-group row mt-3">
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="textual-mode" id="textual-mode2" value="1" disabled/>
                                            <label className="form-check-label" for="textual-mode2">
                                                {__('arbreomatic.custom_palette')}
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>

    );
}
