package com.example.suncode.db;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.Hibernate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "tabela_testowa")
@Data
public class Column {

    @Id
    @javax.persistence.Column(unique = true, nullable = false)
    @EqualsAndHashCode.Include
    private BigInteger id;

    @javax.persistence.Column
    private String kolumna1;

    @javax.persistence.Column
    private String kolumna2;

    @javax.persistence.Column
    private String kolumna3;

    @javax.persistence.Column
    private BigInteger kolumna4;

    @javax.persistence.Column
    private BigInteger kolumna4;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Column test = (Column) o;
        return id != null && Objects.equals(id, test.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
