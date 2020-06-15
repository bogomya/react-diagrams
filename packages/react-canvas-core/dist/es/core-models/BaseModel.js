"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const BaseEntity_1 = require("./BaseEntity");
const CanvasModel_1 = require("../entities/canvas/CanvasModel");
class BaseModel extends BaseEntity_1.BaseEntity {
    constructor(options) {
        super(options);
    }
    performanceTune() {
        return true;
    }
    getParentCanvasModel() {
        if (!this.parent) {
            return null;
        }
        if (this.parent instanceof CanvasModel_1.CanvasModel) {
            return this.parent;
        }
        else if (this.parent instanceof BaseModel) {
            return this.parent.getParentCanvasModel();
        }
        return null;
    }
    getParent() {
        return this.parent;
    }
    setParent(parent) {
        this.parent = parent;
    }
    getSelectionEntities() {
        return [this];
    }
    serialize() {
        return Object.assign(Object.assign({}, super.serialize()), { type: this.options.type, selected: this.options.selected, extras: this.options.extras });
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.extras = event.data.extras;
        this.options.selected = event.data.selected;
    }
    getType() {
        return this.options.type;
    }
    isSelected() {
        return this.options.selected;
    }
    isLocked() {
        const locked = super.isLocked();
        if (locked) {
            return true;
        }
        // delegate this call up to the parent
        if (this.parent) {
            return this.parent.isLocked();
        }
        return false;
    }
    setSelected(selected = true) {
        if (this.options.selected !== selected) {
            this.options.selected = selected;
            this.fireEvent({
                isSelected: selected
            }, 'selectionChanged');
        }
    }
    remove() {
        this.fireEvent({}, 'entityRemoved');
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=BaseModel.js.map