package com.example.suncode.column;


import com.example.suncode.column.dto.TestDto;
import com.example.suncode.db.Test;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ColumnMapper {

	ColumnMapper MAPPER = Mappers.getMapper(ColumnMapper.class);

	TestDto testToTestDTO(Test test);

}
