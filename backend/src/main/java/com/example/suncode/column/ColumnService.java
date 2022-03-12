package com.example.suncode.column;

import com.example.suncode.DAO.ColumnDAO;
import com.example.suncode.db.Test;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ColumnService {

	private final ColumnDAO columnDAO;
	private List<String> columnsList = new ArrayList<>();
	private String mainColumn;
	private String secondColumn;
	private String thirdColumn;

	public ColumnService(ColumnDAO columnDAO) {

		this.columnDAO = columnDAO;
	}

	private void choseColumns(String column) {
		switch (column) {
			case "1":
				mainColumn = "t1.kolumna1";
				secondColumn = "t2.kolumna2";
				thirdColumn = "t2.kolumna3";
				break;
			case "2":
				mainColumn = "t1.kolumna2";
				secondColumn = "t2.kolumna1";
				thirdColumn = "t2.kolumna3";
				break;
			case "3":
				mainColumn = "t1.kolumna3";
				secondColumn = "t2.kolumna2";
				thirdColumn = "t2.kolumna1";
				break;
		}
	}


	public List<Test> getUniqueColumns(String column) {
		choseColumns(column);
		return columnDAO
				.getUniq(
						mainColumn,
						secondColumn,
						thirdColumn);
	}

	public List<Test> getNotUniqueColumns(String column) {
		choseColumns(column);
		return columnDAO
				.getNotUniq(
						mainColumn,
						secondColumn,
						thirdColumn);
	}
}
