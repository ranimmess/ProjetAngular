import { ProductWithRatingDto } from "./ProductWithRatingDto";

export interface  ListProductDto {
	
	allpro?: ProductWithRatingDto[];
	mostLikedProduct?: ProductWithRatingDto[];
	elecCateg?: ProductWithRatingDto[];
	tabTelCatg?: ProductWithRatingDto[];
}
