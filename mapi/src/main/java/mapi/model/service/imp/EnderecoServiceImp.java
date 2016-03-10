package mapi.model.service.imp;

import java.util.List;

import javax.inject.Inject;

import mapi.model.dao.EnderecoDao;
import mapi.model.domain.Endereco;
import mapi.model.service.EnderecoService;

public class EnderecoServiceImp implements EnderecoService {
	
	@Inject
	private EnderecoDao enderecoDao;

	@Override
	public List<Endereco> getEnderecos() {
		return enderecoDao.getEnderecos();
	}

	@Override
	public Endereco salvar(Endereco endereco) {
		return enderecoDao.salvar(endereco);
	}

	@Override
	public void atualizar(Endereco endereco) {
		enderecoDao.atualizar(endereco);

	}

	@Override
	public void excluir(Endereco endereco) {
		enderecoDao.excluir(endereco);
	}

}
