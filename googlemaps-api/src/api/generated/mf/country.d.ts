/* eslint-disable */
/* tslint:disable */
import { UseQueryOptions, UseQueryResult, UseMutationOptions, MutateFunction, UseMutationResult } from 'react-query'
import { RequestInit } from 'node-fetch'

export type CountryDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; name: string; isoCode: string; description?: string; links?: Link[] }

export type Link = { rel?: string; href?: string; hreflang?: string; media?: string; title?: string; type?: string; deprecation?: string; profile?: string; name?: string }

export type ClientDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; name: string; description?: string; links?: Link[] }

export type WorkstationParamDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; workstationId: number; name: string; typeId: number; description?: string; valueType: "STRING" | "INTEGER" | "LONG" | "FLOAT" | "DOUBLE" | "BIT" | "BOOLEAN" | "DATE" | "DATETIME"; defaultValue?: string; links?: Link[] }

export type WorkstationParamTypeDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type ToolGenericDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; homologatedAt?: string; comments?: string; imageUuid?: string; links?: Link[] }

export type ToolFamilyDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; imageUuid?: string; parentId?: number; links?: Link[] }

export type SupplierDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; cardId: string; name: string; code?: string; comments?: string; website?: string; links?: Link[] }

export type SectorDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type ScrapTypeDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type ScrapTypeFamilyDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; imageUuid?: string; parentId?: number; links?: Link[] }

export type RouteStepDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; routeId: number; procedureId?: number; position?: number; employeeNumber?: number; globalOee?: number; comments?: string; links?: Link[] }

export type RouteDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type ProcedureDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type MoldDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; homologatedAt?: string; comments?: string; imageUuid?: string; links?: Link[] }

export type MeasureUnitDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; abbreviation: string; links?: Link[] }

export type MaterialGenericDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; externalCode?: string; name: string; description?: string; isVirtual: boolean; imageUuid?: string; compositionImageUuid?: string; observations?: string; isRawMaterial: boolean; isSemifinished: boolean; isFinished: boolean; links?: Link[] }

export type MaterialFamilyDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; imageUuid?: string; parentId?: number; links?: Link[] }

export type FactoryDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; area?: number; links?: Link[] }

export type WorkstationGenericDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; productionLineId: number; parentId?: number; assignable?: boolean; links?: Link[] }

export type MachineGenericDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; productionLineId: number; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; calibratedAt?: string; homologatedAt?: string; length?: number; height?: number; width?: number; weight?: number; energyConsumption?: number; power?: number; comments?: string; links?: Link[] }

export type LuminarieDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; productionLineId: number; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; calibratedAt?: string; homologatedAt?: string; length?: number; height?: number; width?: number; weight?: number; energyConsumption?: number; power?: number; comments?: string; luminarieClass?: string; mac?: number; amperage?: number; watts?: number; group?: number; device?: number; pattern?: number; links?: Link[] }

export type ProductionLineGenericDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; sectionId: number; links?: Link[] }

export type CommandCenterDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; sectionId: number; counter?: string; cups?: string; telemetryConnection?: string; telemetryProtocol: "NONE" | "SATEL_IBERIA" | "SOLAR_POWER"; rate?: string; contractedWatts?: number; voltage?: number; observations?: string; links?: Link[] }

export type SectionDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; factoryId: number; links?: Link[] }

export type DimensionTypeDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; abbreviation?: string; parentTypeId?: number; links?: Link[] }

export type CustomerDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; cardId: string; name: string; code?: string; comments?: string; defaultDiscount?: number; links?: Link[] }

export type AddressDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; contactId: number; typeId: number; lineOne: string; lineTwo?: string; city: string; province: string; postalCode: string; countryId: number; contactPerson?: string; phoneNumber?: string; mobileNumber?: string; faxNumber?: string; email?: string; links?: Link[] }

export type ConsumableDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; externalCode?: string; name: string; description?: string; isVirtual: boolean; imageUuid?: string; compositionImageUuid?: string; observations?: string; remainingUnits: number; defaultCost?: number; links?: Link[] }

export type CalendarDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; color: string; isExcluded: boolean; links?: Link[] }

export type CalendarEventDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; calendarId: number; name: string; description?: string; fromDateTime: string; untilDateTime: string; highlighted: boolean; links?: Link[] }

export type CoordinateDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; assetId: number; latitude: number; longitude: number; altitude?: number; locatedAt: string; links?: Link[] }

export type AssetFamilyDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; imageUuid?: string; parentId?: number; links?: Link[] }

export type AddressTypeDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; links?: Link[] }

export type CountryFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; isoCode?: string; description?: string }

export type PageDtoCountryDto = { content?: CountryDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationParamFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; typeId?: number; description?: string }

export type PageDtoWorkstationParamDto = { content?: WorkstationParamDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoWorkstationParamMinDto = { content?: WorkstationParamMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationParamMinDto = { id?: number; name?: string }

export type WorkstationFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; productionLineId?: number; productionLineIds?: number[]; parentId?: number; assignable?: boolean }

export type PageDtoWorkstationDto = { content?: WorkstationDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; productionLineId: number; parentId?: number; assignable?: boolean; type?: string; links?: Link[] }

export type PageDtoWorkstationMinDto = { content?: WorkstationMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationMinDto = { id?: number; code?: string; name?: string; type?: string; productionLineId?: number; parentId?: number }

export type WorkstationParamTypeFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoWorkstationParamTypeDto = { content?: WorkstationParamTypeDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoWorkstationParamTypeMinDto = { content?: WorkstationParamTypeMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationParamTypeMinDto = { id?: number; name?: string }

export type ToolDocumentDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; toolId: number; documentName: string; documentUuid: string; links?: Link[] }

export type ToolDocumentFilter = { active?: boolean; id?: number; ids?: number[]; documentName?: string }

export type PageDtoToolDocumentDto = { content?: ToolDocumentDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ToolFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED"; familyIds?: number[]; types?: "TOOL_GENERIC" | "MOLD"[] }

export type PageDtoToolDto = { content?: ToolDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ToolDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; name: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; homologatedAt?: string; comments?: string; imageUuid?: string; type?: string; links?: Link[] }

export type PageDtoToolMinDto = { content?: ToolMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ToolMinDto = { id?: number; name?: string; serialNumber?: string; type?: string }

export type ToolGenericFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED"; familyIds?: number[] }

export type PageDtoToolGenericDto = { content?: ToolGenericDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ToolFamilyFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; parentId?: number }

export type PageDtoToolFamilyDto = { content?: ToolFamilyDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoToolFamilyMinDto = { content?: ToolFamilyMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ToolFamilyMinDto = { id?: number; name?: string; parentId?: number }

export type SupplierFilter = { active?: boolean; id?: number; ids?: number[]; cardId?: string; name?: string; code?: string }

export type PageDtoSupplierDto = { content?: SupplierDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ContactMinDto = { id?: number; name?: string; code?: string; type?: string }

export type PageDtoContactMinDto = { content?: ContactMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type SectorFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoSectorDto = { content?: SectorDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoSectorMinDto = { content?: SectorMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type SectorMinDto = { id?: number; name?: string }

export type ScrapTypeFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; familyIds?: number[] }

export type PageDtoScrapTypeDto = { content?: ScrapTypeDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoScrapTypeMinDto = { content?: ScrapTypeMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ScrapTypeMinDto = { id?: number; name?: string }

export type ScrapTypeFamilyFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; parentId?: number }

export type PageDtoScrapTypeFamilyDto = { content?: ScrapTypeFamilyDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoScrapTypeFamilyMinDto = { content?: ScrapTypeFamilyMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ScrapTypeFamilyMinDto = { id?: number; name?: string; parentId?: number }

export type RouteStepWorkstationDto = { workstationId: number; oee?: number; cycleTime?: number; numberOfEmployees?: number }

export type RouteStepWorkstationParamDto = { workstationParamId: number; value: string }

export type RouteStepMaterialDto = { materialId: number; units: number; tolerance: number; measureUnitId: number }

export type RouteStepDocumentDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; routeStepId: number; documentName: string; documentUuid: string; links?: Link[] }

export type RouteStepDocumentFilter = { active?: boolean; id?: number; ids?: number[]; documentName?: string }

export type PageDtoRouteStepDocumentDto = { content?: RouteStepDocumentDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type RouteStepFilter = { active?: boolean; id?: number; ids?: number[]; procedureId?: number }

export type PageDtoRouteStepDto = { content?: RouteStepDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type RouteFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoRouteDto = { content?: RouteDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoRouteMinDto = { content?: RouteMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type RouteMinDto = { id?: number; name?: string }

export type ProcedureFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoProcedureDto = { content?: ProcedureDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type PageDtoProcedureMinDto = { content?: ProcedureMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ProcedureMinDto = { id?: number; name?: string }

export type MoldContentDto = { moldId: number; materialId: number; units: number }

export type MoldFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED"; familyIds?: number[] }

export type PageDtoMoldDto = { content?: MoldDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MoldContentFilter = { active?: boolean; moldId?: number; moldIds?: number[]; materialId?: number; materialIds?: number[] }

export type PageDtoMoldContentDto = { content?: MoldContentDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MeasureUnitFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; abbreviation?: string }

export type PageDtoMeasureUnitDto = { content?: MeasureUnitDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MeasureUnitMinDto = { id?: number; name?: string; abbreviation?: string }

export type PageDtoMeasureUnitMinDto = { content?: MeasureUnitMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialDocumentDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; materialId: number; documentName: string; documentUuid: string; links?: Link[] }

export type MaterialDocumentFilter = { active?: boolean; id?: number; ids?: number[]; documentName?: string }

export type PageDtoMaterialDocumentDto = { content?: MaterialDocumentDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialCompositionDto = { componentId: number; compositionOrder: number; units: number; tolerance: number; measureUnitId: number; imageMap?: string }

export type MaterialFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; isVirtual?: boolean; familyIds?: number[]; types?: "MATERIAL_GENERIC" | "CONSUMABLE"[] }

export type MaterialDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; externalCode?: string; name: string; description?: string; isVirtual: boolean; imageUuid?: string; compositionImageUuid?: string; observations?: string; type?: string; links?: Link[] }

export type PageDtoMaterialDto = { content?: MaterialDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialMinDto = { id?: number; code?: string; name?: string; type?: string }

export type PageDtoMaterialMinDto = { content?: MaterialMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialGenericFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; isVirtual?: boolean; familyIds?: number[]; isRawMaterial?: boolean; isSemifinished?: boolean; isFinished?: boolean }

export type PageDtoMaterialGenericDto = { content?: MaterialGenericDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialFamilyFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; isRoot?: boolean; description?: string; parentId?: number }

export type PageDtoMaterialFamilyDto = { content?: MaterialFamilyDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MaterialFamilyMinDto = { id?: number; name?: string; parentId?: number }

export type PageDtoMaterialFamilyMinDto = { content?: MaterialFamilyMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MachineFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; productionLineId?: number; productionLineIds?: number[]; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED" }

export type MachineDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; productionLineId: number; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status: "ENABLED" | "MAINTAINING" | "DISABLED"; defaultCost?: number; maintenanceAt?: string; repairedAt?: string; disabledAt?: string; receivedAt?: string; calibratedAt?: string; homologatedAt?: string; length?: number; height?: number; width?: number; weight?: number; energyConsumption?: number; power?: number; comments?: string; type?: string; links?: Link[] }

export type PageDtoMachineDto = { content?: MachineDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MachineMinDto = { id?: number; code?: string; name?: string; type?: string; productionLineId?: number; parentId?: number }

export type PageDtoMachineMinDto = { content?: MachineMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type WorkstationGenericFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; productionLineId?: number; productionLineIds?: number[]; parentId?: number; assignable?: boolean }

export type PageDtoWorkstationGenericDto = { content?: WorkstationGenericDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AssetMinDto = { id?: number; code?: string; name?: string; type?: string }

export type PageDtoAssetMinDto = { content?: AssetMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type MachineGenericFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; productionLineId?: number; productionLineIds?: number[]; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED" }

export type PageDtoMachineGenericDto = { content?: MachineGenericDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type LuminarieFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; productionLineId?: number; productionLineIds?: number[]; parentId?: number; assignable?: boolean; manufacturer?: string; brand?: string; model?: string; serialNumber?: string; status?: "ENABLED" | "MAINTAINING" | "DISABLED"; luminarieClass?: string; mac?: number }

export type PageDtoLuminarieDto = { content?: LuminarieDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ProductionLineFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[] }

export type PageDtoProductionLineDto = { content?: ProductionLineDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ProductionLineDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; sectionId: number; type?: string; links?: Link[] }

export type PageDtoProductionLineMinDto = { content?: ProductionLineMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ProductionLineMinDto = { id?: number; code?: string; name?: string; type?: string; sectionId?: number }

export type ProductionLineGenericFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[] }

export type PageDtoProductionLineGenericDto = { content?: ProductionLineGenericDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CommandCenterFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; factoryId?: number; factoryIds?: number[]; sectionId?: number; sectionIds?: number[]; cups?: string; telemetryProtocol?: "NONE" | "SATEL_IBERIA" | "SOLAR_POWER" }

export type PageDtoCommandCenterDto = { content?: CommandCenterDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type SectionFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[] }

export type PageDtoSectionDto = { content?: SectionDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type FactoryFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[] }

export type PageDtoFactoryDto = { content?: FactoryDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type DimensionTypeFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; abbreviation?: string }

export type PageDtoDimensionTypeDto = { content?: DimensionTypeDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CustomerFilter = { active?: boolean; id?: number; ids?: number[]; cardId?: string; name?: string; code?: string }

export type PageDtoCustomerDto = { content?: CustomerDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AddressFilter = { active?: boolean; id?: number; ids?: number[]; typeId?: number; city?: string; province?: string; postalCode?: string; country?: string; contactPerson?: string }

export type PageDtoAddressDto = { content?: AddressDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ContactFilter = { active?: boolean; id?: number; ids?: number[]; cardId?: string; name?: string; code?: string; types?: "CUSTOMER" | "SUPPLIER"[] }

export type ContactDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; cardId: string; name: string; code?: string; comments?: string; type?: string; links?: Link[] }

export type PageDtoContactDto = { content?: ContactDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ConsumableFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; isVirtual?: boolean; familyIds?: number[] }

export type PageDtoConsumableDto = { content?: ConsumableDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CalendarEventFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; fromDateTime?: string; untilDateTime?: string }

export type PageDtoCalendarEventDto = { content?: CalendarEventDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CalendarEventMinDto = { id?: number; name?: string; fromDateTime?: string; untilDateTime?: string }

export type PageDtoCalendarEventMinDto = { content?: CalendarEventMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CalendarFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoCalendarDto = { content?: CalendarDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CalendarMinDto = { id?: number; name?: string }

export type PageDtoCalendarMinDto = { content?: CalendarMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type BarcodeContentDto = { content: string }

export type AssetDocumentDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; assetId: number; documentName: string; documentUuid: string; links?: Link[] }

export type AssetDocumentFilter = { active?: boolean; id?: number; ids?: number[]; documentName?: string }

export type PageDtoAssetDocumentDto = { content?: AssetDocumentDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type CoordinateFilter = { active?: boolean; id?: number; ids?: number[] }

export type PageDtoCoordinateDto = { content?: CoordinateDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AssetFilter = { active?: boolean; id?: number; ids?: number[]; code?: string; name?: string; description?: string; familyIds?: number[]; types?: "FACTORY" | "SECTION" | "PRODUCTION_LINE_GENERIC" | "COMMAND_CENTER" | "WORKSTATION_GENERIC" | "MACHINE_GENERIC" | "LUMINARIE"[] }

export type AssetDto = { versionLock?: number; active?: boolean; createdAt?: string; modifiedAt?: string; modifiedBy?: number; id?: number; clientId: number; code: string; name: string; description?: string; imageUuid?: string; type?: string; links?: Link[] }

export type PageDtoAssetDto = { content?: AssetDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AssetFamilyFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string; parentId?: number }

export type PageDtoAssetFamilyDto = { content?: AssetFamilyDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AssetFamilyMinDto = { id?: number; name?: string; parentId?: number }

export type PageDtoAssetFamilyMinDto = { content?: AssetFamilyMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AddressTypeFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoAddressTypeDto = { content?: AddressTypeDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type AddressTypeMinDto = { id?: number; name?: string }

export type PageDtoAddressTypeMinDto = { content?: AddressTypeMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ClientFilter = { active?: boolean; id?: number; ids?: number[]; name?: string; description?: string }

export type PageDtoClientDto = { content?: ClientDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type ClientMinDto = { id?: number; name?: string }

export type PageDtoClientMinDto = { content?: ClientMinDto[]; page?: number; size?: number; totalElements?: number; first?: boolean; empty?: boolean; last?: boolean; numberOfElements?: number; totalPages?: number }

export type JsonPatch = {}

export type GetCountryPathParams = { id: number }
/**
 * Returns the specified country

 * Retrieves the data that match with the specified identifier

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/getCountry
 */
export function getCountry(pathParams?: GetCountryPathParams, options?: RequestInit): Promise<CountryDto>;
/**
 * Returns the specified country

 * Retrieves the data that match with the specified identifier

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/getCountry
 */
export function useGetCountry(pathParams?: GetCountryPathParams, config?: UseQueryOptions<CountryDto>, options?: RequestInit): UseQueryResult<CountryDto>;
declare namespace useGetCountry {
    /** Entire key: `['{apiUrl}/v1/countries/{id}', pathParams]` */
    export const queryKey: string;
}

export type PutCountryPathParams = { id: number }
/**
 * Updates the specified country

 * Updates the existing data with the specified one in the request body

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/putCountry
 */
export function putCountry(pathParams?: PutCountryPathParams, body?: CountryDto | [PutCountryPathParams?, void?, CountryDto?, RequestInit?], options?: RequestInit): Promise<CountryDto>;
/**
 * Updates the specified country

 * Updates the existing data with the specified one in the request body

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/putCountry
 */
export function usePutCountry(pathParams?: PutCountryPathParams, config?: UseMutationOptions<CountryDto, unknown, CountryDto>, options?: RequestInit): UseMutationResult<CountryDto, unknown, CountryDto>;
export type DeleteCountryPathParams = { id: number }
/**
 * Deletes permanently the specified country

 * Removes the existing data permanently

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/deleteCountry
 */
export function deleteCountry(pathParams?: DeleteCountryPathParams, options?: RequestInit): Promise<void>;
/**
 * Deletes permanently the specified country

 * Removes the existing data permanently

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/deleteCountry
 */
export function useDeleteCountry(pathParams?: DeleteCountryPathParams, config?: UseMutationOptions<void, unknown, void>, options?: RequestInit): UseMutationResult<void, unknown, void>;
export type PatchCountryPathParams = { id: number }
/**
 * Updates 'partially' the specified country

 * Updates the existing data with a structure which has the changes to apply (see rfc6902)

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/patchCountry
 */
export function patchCountry(pathParams?: PatchCountryPathParams, body?: JsonPatch | [PatchCountryPathParams?, void?, JsonPatch?, RequestInit?], options?: RequestInit): Promise<CountryDto>;
/**
 * Updates 'partially' the specified country

 * Updates the existing data with a structure which has the changes to apply (see rfc6902)

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/patchCountry
 */
export function usePatchCountry(pathParams?: PatchCountryPathParams, config?: UseMutationOptions<CountryDto, unknown, JsonPatch>, options?: RequestInit): UseMutationResult<CountryDto, unknown, JsonPatch>;
/**
 * Returns all existing countries

 * Retrieves every country for the specified country id in the path

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/getCountries
 */
export function getCountries(options?: RequestInit): Promise<CountryDto[]>;
/**
 * Returns all existing countries

 * Retrieves every country for the specified country id in the path

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/getCountries
 */
export function useGetCountries(config?: UseQueryOptions<CountryDto[]>, options?: RequestInit): UseQueryResult<CountryDto[]>;
declare namespace useGetCountries {
    /** Entire key: `['{apiUrl}/v1/countries', ]` */
    export const queryKey: string;
}

/**
 * Creates a new country

 * Creates a new country using the specified data

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/postCountry
 */
export function postCountry(body?: CountryDto | [void?, void?, CountryDto?, RequestInit?], options?: RequestInit): Promise<CountryDto>;
/**
 * Creates a new country

 * Creates a new country using the specified data

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/postCountry
 */
export function usePostCountry(config?: UseMutationOptions<CountryDto, unknown, CountryDto>, options?: RequestInit): UseMutationResult<CountryDto, unknown, CountryDto>;
export type SearchCountriesQueryParams = { page?: number; size?: number; sort?: string[] }
/**
 * Returns all countries which match with the specified filter

 * Retrieves every country for the specified filter

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/searchCountries
 */
export function searchCountries(body?: CountryFilter | [void?, SearchCountriesQueryParams?, CountryFilter?, RequestInit?], queryParams?: SearchCountriesQueryParams, options?: RequestInit): Promise<PageDtoCountryDto>;
/**
 * Returns all countries which match with the specified filter

 * Retrieves every country for the specified filter

 * https://emi.soincon.es/snc-mf-api/swagger-ui/index.html?configUrl=/snc-mf-api/v3/api-docs/swagger-config#/country-controller/searchCountries
 */
export function useSearchCountries(body?: CountryFilter, queryParams?: SearchCountriesQueryParams, config?: UseQueryOptions<PageDtoCountryDto>, options?: RequestInit): UseQueryResult<PageDtoCountryDto>;
declare namespace useSearchCountries {
    /** Entire key: `['{apiUrl}/v1/countries/search', body, queryParams]` */
    export const queryKey: string;
}

