import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SectionNode } from '../share/food-node.interface';

@Injectable({
	providedIn: 'root'
})
export class DataProviderService {
	isChanged = new Subject<SectionNode>();

	data: SectionNode =
		{
			name: 'Root',
			children: [
				{
					name: 'Section',
					children: [
						{ name: 'Subsection' },
						{ name: 'Subsection' }
					],
				},
				{
					name: 'Section',
					children: [
						{ name: 'Subsection' },
						{ name: 'Subsection' }
					],
				},
			],
		}

	constructor() { }

	getData() {
		return this.data;
	}

	addSection(section: SectionNode) {
		this.data.children?.push(section);
		this.isChanged.next(this.data);
	}

	addSubSection(section: SectionNode, index: number) {
		this.data.children?.[index].children?.push(section);
		this.isChanged.next(this.data);
	}

	deleteSection(index: number) {
		this.data.children?.splice(index, 1)
		this.isChanged.next(this.data);
	}

	deleteSubSection(index1: number, index2: number) {
		this.data.children?.[index1]!.children?.splice(index2, 1)
		this.isChanged.next(this.data);
	}

	updateSectionName(index: number, name: string) {
		console.log(this.data.children![index]!.name + index)
		
	}

	updateSubSectionName(index1: number, index2: number, name: string) {
		console.log(this.data.children![index1].children![index2].name + index1+ index2);
	}
}
