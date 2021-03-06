package mapi.model.dao;

import java.util.List;

import mapi.model.domain.Endereco;

public interface EnderecoDao {
	
	public Endereco getEnderecoPorCodigo(String cep);

	public List<Endereco> getEnderecos();
	
	public Endereco salvar(Endereco endereco);
	
	public void atualizar(Endereco endereco);
	
	public void excluir (Endereco endereco);
	
	public Endereco getEndereco(Endereco id);
	
}
