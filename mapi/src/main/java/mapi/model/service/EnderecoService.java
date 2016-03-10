package mapi.model.service;

import java.util.List;

import mapi.model.domain.Endereco;

public interface EnderecoService {
	
	public List<Endereco> getEnderecos();

	public Endereco salvar(Endereco endereco);

	public void atualizar(Endereco endereco);

	public void excluir(Endereco endereco);

}
