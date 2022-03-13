package com.example.suncode.column;

import com.example.suncode.DAO.ColumnDAO;
import com.example.suncode.db.Column;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ColumnService {

	private final ColumnDAO columnDAO;
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


	public List<Column> getUniqueColumns(String column) {
		choseColumns(column);
		return columnDAO
				.getUniqueColumn(
						mainColumn,
						secondColumn,
						thirdColumn);
	}

	public List<Column> getNotUniqueColumns(String column) {
		choseColumns(column);
		return columnDAO
				.getNotUnique(
						mainColumn,
						secondColumn,
						thirdColumn);
	}
}
