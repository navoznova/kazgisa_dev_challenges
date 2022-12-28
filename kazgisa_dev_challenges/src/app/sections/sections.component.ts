import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SectionNode } from '../share/food-node.interface';
import { DataProviderService } from './data-provider.service';


@Component({
	selector: 'app-sections',
	templateUrl: './sections.component.html',
	styleUrls: ['./sections.component.css']
})

export class SectionsComponent implements OnInit {
	data!: SectionNode[];
	isEditMode: boolean = false;
	newName: string = '';

	@ViewChild('editSectionName') editTemplate!: TemplateRef<any>;
	@ViewChild('readMode') readTemplate!: TemplateRef<any>;

	constructor(private dataProvider: DataProviderService) {
	}

	ngOnInit() {
		this.data = this.dataProvider.getData();
		this.dataProvider.isChanged.subscribe(
			(data: SectionNode[]) => {
				this.data = data;
			}
		)
	}

	onAddSection() {
		let newSection: SectionNode = { name: 'Section' }
		this.dataProvider.addSection(newSection);
	}

	onAddSubSection(index: number) {
		let newSubSection: SectionNode = { name: 'Subsection' }
		this.dataProvider.addSubSection(newSubSection, index);
	}

	onDeleteSection(index: number) {
		this.dataProvider.deleteSection(index);
	}

	onDeleteSubSection(index1: number, index2: number) {
		this.dataProvider.deleteSubSection(index1, index2);
	}

	onEditSection(index: number, newName: string) {
		this.isEditMode = true;
		return this.editTemplate;

		console.log(this.editTemplate)
		// this.dataProvider.updateSectionName(index, newName);
	}

	onEditSubSection(index1: number, index2: number, newName: string) {
		// this.dataProvider.updateSubSectionName(index1, index2, newName);
	}

	onCansel() {
		return this.readTemplate
		console.log('Cansel' + this.newName);
	}
	onSave() {
		console.log('Save');
	}



}